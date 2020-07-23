export class skillComboTree {
  root = null;
  constructor(baseSkillSet) {
    this.root = baseSkillSet;
  }

  addCombo(skillSet, skill) {
    skill.combo = skillSet;
  }

  setSkill(skill, newSkill) {

  }

  getSkill(skillName) {
    return 
  }
}