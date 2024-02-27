export interface TEvent {
    id: string;
    title: string;
    description: string;
    speaker: string;
    dateStart: string; 
    dateEnd: string; 
    startTime: string; 
    duration: string; 
    location: string;
    category: string;
    status: boolean;
    subscribersLimit: number;
    event_id: string | null;
  }