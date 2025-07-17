export interface Flight {
  id: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  price: number;
  airline: string;
}

export interface BookingDetails {
  flightId: string;
  travelerName: string;
  travelerEmail: string;
  travelerPhone: string;
  class: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}