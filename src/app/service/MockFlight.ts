import { Flight } from "../component/flight/Flight"

export class MockFlight {
  public static mFlight: Flight[] = [
    {
      fullName: "Panupong Saejeong",
      from: "Thailand",
      to: "Chaina",
      type: "Return",
      adults: 2,
      children: 0,
      infants: 0,
      departure: new Date(2565, 2, 10),
      arrival: new Date(2565, 2, 20),

    },
  ];
}
