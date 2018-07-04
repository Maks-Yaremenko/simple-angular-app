import { IEntity } from '../models/entity';

export class MockDataConfig {
  public static get entities(): IEntity[] {
    return [
      { id: 1, name: 'Arrivals Database', type: 'Database',     connected: true  },
      { id: 2, name: 'Calculator',        type: 'Application',  connected: true  },
      { id: 3, name: 'California',        type: 'Server',       connected: true  },
      { id: 4, name: 'Arrivals',          type: 'BPM',          connected: false },
      { id: 5, name: 'Car Wash',          type: 'BPM',          connected: false },
      { id: 6, name: 'Maintenance',       type: 'Project',      connected: false },
      { id: 7, name: 'Customer payment',  type: 'BPM',          connected: false },
      { id: 8, name: 'Technical issues',  type: 'Project',      connected: false }
    ];
  }
}
