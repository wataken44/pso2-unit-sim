class ParameterBase {
  hp: number;
  pp: number;
  
  satk: number;
  ratk: number;
  tatk: number;
  dex: number;

  sdef: number;
  rdef: number;
  tdef: number;
  
  sreg: number;
  rreg: number;
  treg: number;
  efreg: number;
  eireg: number;
  etreg: number;
  ewreg: number;
  elreg: number;
  edreg: number;

  getParam(index: number) {
    return [
      this.hp,
      this.pp,
      this.satk,
      this.ratk,
      this.tatk,
      this.dex,
      this.sdef,
      this.rdef,
      this.tdef,      
      this.sreg,
      this.rreg,
      this.treg,
      this.efreg,
      this.eireg,
      this.etreg,
      this.ewreg,
      this.elreg,
      this.edreg,
    ][index];
  }
}

export class UnitParameter extends ParameterBase {
  id: string;
  unit_type: string;
  rarity: number;
  name: string;
  craft: string;

  constructor(param: any) {
    super();
    this.id = param.id;
    this.unit_type = param.unit_type;
    this.rarity = param.rarity;
    this.name = param.name;
    this.craft = param.craft;

    this.hp = param.hp;
    this.pp = param.pp;
    
    this.satk = param.satk;
    this.ratk = param.ratk;
    this.tatk = param.tatk;
    this.dex = param.dex;

    this.sdef = param.sdef + Math.floor(0.4 * param.sdef);
    this.rdef = param.rdef + Math.floor(0.4 * param.rdef);
    this.tdef = param.tdef + Math.floor(0.4 * param.tdef);
    
    this.sreg = param.sreg;
    this.rreg = param.rreg;
    this.treg = param.treg;
    this.efreg = param.efreg;
    this.eireg = param.eireg;
    this.etreg = param.etreg;
    this.ewreg = param.ewreg;
    this.elreg = param.elreg;
    this.edreg = param.edreg;
  }
  
  getDisplayName() {
    if(this.craft == "") {
      return this.name;
    }
    return this.name + "(" + this.craft + ")";
  }

  getDisplayNameWithParameter() {
    var ret = ""
    if(this.craft == "") {
      ret = this.name;
    } else {
      ret = this.name + "(" + this.craft + ")";
    }

    ret += " HP:" + String(this.hp);
    ret += " PP:" + String(this.pp);

    var max_stname = "";
    var max_stval = 0;

    if(this.satk > 0) {
      max_stname = "打";
      max_stval = this.satk;
    }

    if(this.ratk > 0) {
      if(this.ratk > max_stval) {
        max_stname = "射";
        max_stval = this.ratk;
      } else if(this.ratk == max_stval) {
        max_stname += "射";
      }
    }

    if(this.tatk > 0) {
      if(this.tatk > max_stval) {
        max_stname = "法";
        max_stval = this.tatk;
      } else if(this.tatk == max_stval) {
        max_stname += "法";
      }
    }

    if(max_stval != 0) {
      ret += " " + max_stname + ":" + String(max_stval);
    }

    return ret;    
  }
}

export class UnitSetParameter extends ParameterBase {
  id: string;
  rear_units: string[];
  arm_units: string[];
  leg_units: string[];

  constructor(param: any) {
    super();
    this.id = param.id;
    this.rear_units = param.rear_units;
    this.arm_units = param.arm_units;
    this.leg_units = param.leg_units;

    this.hp = param.hp;
    this.pp = param.pp;
    
    this.satk = param.satk;
    this.ratk = param.ratk;
    this.tatk = param.tatk;
    this.dex = param.dex;

    this.sdef = param.sdef;
    this.rdef = param.rdef;
    this.tdef = param.tdef;
    
    this.sreg = param.sreg;
    this.rreg = param.rreg;
    this.treg = param.treg;
    this.efreg = param.efreg;
    this.eireg = param.eireg;
    this.etreg = param.etreg;
    this.ewreg = param.ewreg;
    this.elreg = param.elreg;
    this.edreg = param.edreg;
  }

  match(rear: string, arm: string, leg: string): boolean {
    if(this.rear_units.length > 0) {
      if(this.rear_units.indexOf(rear) == -1) { return false; }
    }

    if(this.arm_units.length > 0) {
      if(this.arm_units.indexOf(arm) == -1) { return false; }
    }

    if(this.leg_units.length > 0) {
      if(this.leg_units.indexOf(leg) == -1) { return false; }
    }

    return true;
  };

}

export const LABEL_SHORT = [
  "HP",
  "PP",
  "打攻",
  "射攻",
  "法攻",
  "技量",
  "打防",
  "射防",
  "法防",      
  "打耐",
  "射耐",
  "法耐",
  "炎耐",
  "氷耐",
  "雷耐",
  "風耐",
  "光耐",
  "闇耐",
];

export const LABEL_LONG = [
  "HP",
  "PP",
  "打撃攻撃力",
  "射撃攻撃力",
  "法撃攻撃力",
  "技量",
  "打撃防御力",
  "射撃防御力",
  "法撃防御力",      
  "打撃耐性",
  "射撃耐性",
  "法撃耐性",
  "炎耐性",
  "氷耐性",
  "雷耐性",
  "風耐性",
  "光耐性",
  "闇耐性",
];
