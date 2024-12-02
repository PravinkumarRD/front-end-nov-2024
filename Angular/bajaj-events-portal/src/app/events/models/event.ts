export interface Event {
    eventId: number;
    eventCode: string;
    eventName: string;
    description: string;
    startDate: Date;
    endDate: Date;
    fees: number;
    seatsFilled: number;
    logo: string;
}
