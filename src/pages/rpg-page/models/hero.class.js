import {KNIGHT, ARCHER, MAGE, ASSASSIN} from '../constants';
import heroService from '../services/hero.service';


export class Hero { 
  constructor(hero) {
    this.name = hero.name;
    this.stats = hero.stats;
    this.heroClass = hero.heroClass;
    this.items = hero.items ? hero.items : [];
    this.skills = hero.skills ? hero.skills : [];
  }
  
  calculateHP() {
    return heroService.calculateHP(this.stats, this.items)
  }

  calculateAtk() {
    return heroService.calculateAtk(this.stats, this.items)
  }

  getName() {
    return this.name;
  }

  getStats() {
    return this.stats;
  }

  getHeroClass() {
    return this.heroClass;
  }

  getItems() {
    return this.items;
  }

  getSkills() {
    return this.skills;
  }

  addItem(item) {
    this.items.push(item);
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  getHero() {
    return {
      name: this.getName(),
      stats: this.getStats(),
      heroClass: this.getHeroClass(),
      items: this.getItems(),
      skills: this.getSkills()      
    } 
  }
}
