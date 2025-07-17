import { test, expect } from '@playwright/test';
import { ApiClient } from '../src/api/apiClient';

const apiClient = new ApiClient('https://cms-apigw.shohoz.com/api/tour/website-data');

test('Validate flight data API', async () => {
  const response = await apiClient.getFlightData('flights');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('flights');
});

test('Post booking API', async () => {
  const bookingDetails = {
    flightId: '12345',
    travelerName: 'John Doe',
    class: 'Economy',
  };
  
  const response = await apiClient.postBooking('bookings', bookingDetails);
  expect(response.status).toBe(201);
  expect(response.data).toHaveProperty('confirmationId');
});