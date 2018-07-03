import { IEntity } from '../models/entity';

export class MockDataConfig {
  public static get entities(): Array<IEntity> {
    return [
      { id: 1, name: 'Arrivals Database', type: 'Database'    },
      { id: 2, name: 'Calculator',        type: 'Application' },
      { id: 3, name: 'California',        type: 'Server'      },
      { id: 4, name: 'Arrivals',          type: 'BPM'         },
      { id: 5, name: 'Car Wash',          type: 'BPM'         },
      { id: 6, name: 'Maintenance',       type: 'Project'     },
      { id: 7, name: 'Customer payment',  type: 'BPM'         },
      { id: 8, name: 'Technical issues',  type: 'Project'     }
    ];
  }
}
