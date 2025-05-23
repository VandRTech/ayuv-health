import { describe, it, expect, beforeAll, afterAll } from 'vitest';

const BASE_URL = 'http://localhost:3000/api/waitlist'; // Assuming Next.js dev server runs on 3000

// Helper function to generate unique emails
const generateUniqueEmail = () => `test_${Date.now()}@example.com`;

describe('/api/waitlist integration tests', () => {
  let createdEntryEmail: string | null = null;
  let createdEntryId: number | null = null;

  // --- POST Tests ---
  describe('POST /api/waitlist', () => {
    it('should create a new waitlist entry successfully', async () => {
      const uniqueEmail = generateUniqueEmail();
      const testEntry = {
        name: 'Test User Success',
        email: uniqueEmail,
        phone: '1234567890',
        interests: 'Testing POST success',
      };

      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testEntry),
      });

      expect(response.status).toBe(201);
      const data = await response.json();

      expect(data.message).toBe('Successfully added to waitlist.');
      expect(data.entry).toBeDefined();
      expect(data.entry.id).toBeTypeOf('number');
      expect(data.entry.created_at).toBeTypeOf('string');
      expect(new Date(data.entry.created_at).toString()).not.toBe('Invalid Date');
      expect(data.entry.name).toBe(testEntry.name);
      expect(data.entry.email).toBe(testEntry.email);
      expect(data.entry.phone).toBe(testEntry.phone); // Supabase returns phone in POST response
      expect(data.entry.interests).toBe(testEntry.interests);
      expect(data.entry.status).toBe('pending'); // Default status

      // Store for use in other tests
      createdEntryEmail = data.entry.email;
      createdEntryId = data.entry.id;
    });

    it('should return 409 for a duplicate email', async () => {
      if (!createdEntryEmail) {
        throw new Error('createdEntryEmail is null, prerequisite test might have failed.');
      }
      const testEntry = {
        name: 'Test User Duplicate',
        email: createdEntryEmail, // Use the email created in the previous test
      };

      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testEntry),
      });

      expect(response.status).toBe(409);
      const data = await response.json();
      expect(data.error).toBe('Email already exists in the waitlist.');
    });

    it('should return 400 if name is missing', async () => {
      const uniqueEmail = generateUniqueEmail();
      const testEntry = {
        email: uniqueEmail,
        interests: 'Testing missing name',
      };

      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testEntry),
      });

      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toBe('Name and email are required.');
    });

    it('should return 400 if email is missing', async () => {
      const testEntry = {
        name: 'Test User Missing Email',
        interests: 'Testing missing email',
      };

      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testEntry),
      });

      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toBe('Name and email are required.');
    });
  });

  // --- GET Tests ---
  describe('GET /api/waitlist', () => {
    it('should retrieve the list of waitlist entries successfully', async () => {
      // Ensure there's at least one entry (from the successful POST test)
      if (!createdEntryEmail) {
        // Create a dummy entry if the first POST test didn't run or failed to set it
        // This makes the GET test more independent.
        await fetch(BASE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'Pre-GET User', email: generateUniqueEmail() }),
        });
      }

      const response = await fetch(BASE_URL, { method: 'GET' });
      expect(response.status).toBe(200);

      const data = await response.json();
      expect(data.count).toBeTypeOf('number');
      expect(data.count).toBeGreaterThanOrEqual(1);
      expect(Array.isArray(data.entries)).toBe(true);
      expect(data.entries.length).toBeGreaterThanOrEqual(1);

      // Check structure of one entry
      const sampleEntry = data.entries.find((e: any) => e.email === createdEntryEmail) || data.entries[0];
      expect(sampleEntry.id).toBeTypeOf('number');
      expect(sampleEntry.name).toBeTypeOf('string');
      expect(sampleEntry.email).toBeTypeOf('string');
      expect(sampleEntry.interests).toBeTypeOf('string'); // Can be null if not provided, but API returns it
      expect(sampleEntry.created_at).toBeTypeOf('string');
      expect(new Date(sampleEntry.created_at).toString()).not.toBe('Invalid Date');
      expect(sampleEntry.status).toBeTypeOf('string');

      // Assert that phone numbers are NOT present in the GET response
      expect(sampleEntry.phone).toBeUndefined();

      data.entries.forEach((entry: any) => {
        expect(entry.phone).toBeUndefined();
      });
    });
  });

  // Note: Proper cleanup of created test entries would require direct DB access or a dedicated cleanup API endpoint.
  // Using unique emails helps isolate test runs.
  // If Supabase client could be used here (e.g. if tests run in an env with Supabase config),
  // we could add an afterAll hook:
  // afterAll(async () => {
  //   if (createdEntryId && isSupabaseConfigured()) {
  //     await supabase.from('waitlist').delete().match({ id: createdEntryId });
  //   }
  // });
});
