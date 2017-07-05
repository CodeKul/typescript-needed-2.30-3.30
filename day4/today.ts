import { Bridge, Group } from './tmrw';

export class City extends Group implements Bridge {

    abs = 'android'

    area = {
        name: 'Deccan',
        dist: 3
    };

    magic = {
        xyz : 'Pune',
        pqr : 5
    }

    getName() {
        return this.area.name;
    }

    walker() {
        
    }
}

let ci: City = new City()
ci.getName()

