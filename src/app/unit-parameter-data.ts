import { UnitParameter, UnitSetParameter } from './unit-parameter'

export const REAR_UNITS: UnitParameter[] = [
  /* %%rear_units%% */
new UnitParameter({id: "R0",unit_type: "rear",rareity: 0,name: "リアなし",craft: "",hp: 0,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 0,rdef: 0,tdef: 0,sreg: 0,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R11-1",unit_type: "rear",rareity: 11,name: "ブリサエーリ",craft: "",hp: 40,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 211,rdef: 220,tdef: 211,sreg: 3,rreg: 4,treg: 0,efreg: 3,eireg: 0,etreg: 0,ewreg: 3,elreg: 3,edreg: 0}),
new UnitParameter({id: "R11-2",unit_type: "rear",rareity: 11,name: "サイキホウヨク",craft: "",hp: 50,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 229,rdef: 202,tdef: 238,sreg: 4,rreg: 4,treg: 0,efreg: 0,eireg: 8,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R11-2-1",unit_type: "rear",rareity: 11,name: "サイキホウヨク",craft: "打撃防御【HP】Lv.10",hp: 100,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 4,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R11-2-2",unit_type: "rear",rareity: 11,name: "サイキホウヨク",craft: "射撃防御【PP】Lv.10",hp: 0,pp: 10,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 4,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R11-2-3",unit_type: "rear",rareity: 11,name: "サイキホウヨク",craft: "法撃防御【属性】Lv.10",hp: 30,pp: 3,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 0,treg: 4,efreg: 4,eireg: 4,etreg: 4,ewreg: 4,elreg: 4,edreg: 4}),
new UnitParameter({id: "R11-3",unit_type: "rear",rareity: 11,name: "Pドライブ",craft: "",hp: 100,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 255,rdef: 235,tdef: 245,sreg: 5,rreg: 3,treg: 4,efreg: 2,eireg: 2,etreg: 2,ewreg: 2,elreg: 2,edreg: 2}),
new UnitParameter({id: "R11-4",unit_type: "rear",rareity: 11,name: "インヴェルム",craft: "",hp: 60,pp: 6,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 230,rdef: 210,tdef: 220,sreg: 3,rreg: 2,treg: 3,efreg: 2,eireg: 0,etreg: 2,ewreg: 0,elreg: 0,edreg: 3}),
new UnitParameter({id: "R11-5",unit_type: "rear",rareity: 11,name: "オフゼルム",craft: "",hp: 70,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 235,rdef: 215,tdef: 225,sreg: 3,rreg: 3,treg: 4,efreg: 0,eireg: 2,etreg: 0,ewreg: 2,elreg: 2,edreg: 0}),
new UnitParameter({id: "R11-6",unit_type: "rear",rareity: 11,name: "イデアルディール",craft: "",hp: 100,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 206,rdef: 202,tdef: 202,sreg: 0,rreg: 3,treg: 3,efreg: 0,eireg: 2,etreg: 0,ewreg: 2,elreg: 0,edreg: 2}),
new UnitParameter({id: "R12-1",unit_type: "rear",rareity: 12,name: "サーキュレイ",craft: "",hp: 50,pp: 9,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 225,rdef: 225,tdef: 225,sreg: 2,rreg: 2,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-2",unit_type: "rear",rareity: 12,name: "サーキュユニオン",craft: "",hp: 75,pp: 9,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 229,rdef: 229,tdef: 229,sreg: 4,rreg: 2,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-3",unit_type: "rear",rareity: 12,name: "ホワイティルプルム",craft: "",hp: 0,pp: 20,satk: 20,ratk: 20,tatk: 20,dex: 0,sdef: 193,rdef: 193,tdef: 215,sreg: 0,rreg: 0,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 4,edreg: 0}),
new UnitParameter({id: "R12-4",unit_type: "rear",rareity: 12,name: "グリュゾベルーラ",craft: "",hp: 0,pp: 15,satk: 0,ratk: 0,tatk: 40,dex: 0,sdef: 207,rdef: 207,tdef: 229,sreg: 1,rreg: 2,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-7",unit_type: "rear",rareity: 12,name: "雷閃イザネイシ",craft: "",hp: 150,pp: 0,satk: 20,ratk: 20,tatk: 20,dex: 20,sdef: 258,rdef: 243,tdef: 243,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 6,ewreg: 0,elreg: 4,edreg: 0}),
new UnitParameter({id: "R12-8",unit_type: "rear",rareity: 12,name: "アストラグレス",craft: "",hp: 60,pp: 10,satk: 20,ratk: 20,tatk: 20,dex: 0,sdef: 233,rdef: 230,tdef: 236,sreg: 2,rreg: 2,treg: 2,efreg: 2,eireg: 2,etreg: 0,ewreg: 0,elreg: 0,edreg: 2}),
new UnitParameter({id: "R12-11",unit_type: "rear",rareity: 12,name: "シャインレッド",craft: "",hp: 0,pp: 0,satk: 80,ratk: 80,tatk: 80,dex: 80,sdef: 241,rdef: 236,tdef: 239,sreg: 3,rreg: 3,treg: 3,efreg: 10,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-12",unit_type: "rear",rareity: 12,name: "シャインブルー",craft: "",hp: 150,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 231,rdef: 228,tdef: 230,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 10,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-13",unit_type: "rear",rareity: 12,name: "ゼイネシスガナフ",craft: "",hp: 120,pp: 4,satk: 15,ratk: 15,tatk: 15,dex: 0,sdef: 240,rdef: 244,tdef: 249,sreg: 3,rreg: 3,treg: 2,efreg: 2,eireg: 2,etreg: 2,ewreg: 2,elreg: 2,edreg: 2}),
new UnitParameter({id: "R12-14",unit_type: "rear",rareity: 12,name: "クリファドガナフ",craft: "",hp: 40,pp: 13,satk: 35,ratk: 35,tatk: 35,dex: 0,sdef: 230,rdef: 236,tdef: 231,sreg: 2,rreg: 2,treg: 1,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-15",unit_type: "rear",rareity: 12,name: "ウェラボード",craft: "",hp: 50,pp: 10,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 240,rdef: 246,tdef: 237,sreg: 5,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-16",unit_type: "rear",rareity: 12,name: "イヴリダキブス",craft: "",hp: 60,pp: 10,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 234,rdef: 234,tdef: 234,sreg: 3,rreg: 3,treg: 3,efreg: 2,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 2}),
new UnitParameter({id: "R12-17",unit_type: "rear",rareity: 12,name: "カブキモノライデン",craft: "",hp: 0,pp: 0,satk: 80,ratk: 80,tatk: 80,dex: 80,sdef: 241,rdef: 236,tdef: 239,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 10,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-18",unit_type: "rear",rareity: 12,name: "ヒメカブキチェリー",craft: "",hp: 150,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 231,rdef: 228,tdef: 230,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 10,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-19",unit_type: "rear",rareity: 12,name: "ステラウォール",craft: "",hp: 50,pp: 5,satk: 15,ratk: 15,tatk: 15,dex: 15,sdef: 229,rdef: 229,tdef: 229,sreg: 2,rreg: 2,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-20",unit_type: "rear",rareity: 12,name: "フォボスクーペ",craft: "",hp: 80,pp: 0,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 263,rdef: 263,tdef: 263,sreg: 5,rreg: 5,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-21",unit_type: "rear",rareity: 12,name: "ゲッコウホロー",craft: "",hp: 0,pp: 0,satk: 80,ratk: 80,tatk: 80,dex: 80,sdef: 241,rdef: 236,tdef: 239,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 10,edreg: 0}),
new UnitParameter({id: "R12-22",unit_type: "rear",rareity: 12,name: "ヤテンホロー",craft: "",hp: 150,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 231,rdef: 228,tdef: 230,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 10}),
new UnitParameter({id: "R12-23",unit_type: "rear",rareity: 12,name: "クラーデムイリック",craft: "",hp: 0,pp: 17,satk: 0,ratk: 0,tatk: 85,dex: 0,sdef: 233,rdef: 229,tdef: 286,sreg: 2,rreg: 1,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 5}),
new UnitParameter({id: "R12-26",unit_type: "rear",rareity: 12,name: "ラッピーシャイン",craft: "",hp: 777,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 0,rdef: 0,tdef: 0,sreg: 0,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-27",unit_type: "rear",rareity: 12,name: "セレケラトリプス",craft: "",hp: 70,pp: 7,satk: 20,ratk: 20,tatk: 20,dex: 50,sdef: 236,rdef: 236,tdef: 236,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-28",unit_type: "rear",rareity: 12,name: "ザラケラトリプス",craft: "",hp: 80,pp: 8,satk: 30,ratk: 30,tatk: 30,dex: 50,sdef: 242,rdef: 242,tdef: 242,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-29",unit_type: "rear",rareity: 12,name: "マスクオブヴェイン",craft: "",hp: 0,pp: 20,satk: 60,ratk: 60,tatk: 60,dex: 0,sdef: 253,rdef: 250,tdef: 250,sreg: 4,rreg: 3,treg: 3,efreg: 3,eireg: 3,etreg: 3,ewreg: 3,elreg: 5,edreg: 5}),
new UnitParameter({id: "R12-30",unit_type: "rear",rareity: 12,name: "オフゼテリオス",craft: "",hp: 70,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 235,rdef: 215,tdef: 225,sreg: 4,rreg: 4,treg: 5,efreg: 0,eireg: 3,etreg: 0,ewreg: 3,elreg: 3,edreg: 0}),
new UnitParameter({id: "R12-31",unit_type: "rear",rareity: 12,name: "星震纏ミシオン",craft: "",hp: 70,pp: 8,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 238,rdef: 238,tdef: 238,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 4}),
new UnitParameter({id: "R12-32",unit_type: "rear",rareity: 12,name: "光跡纏ミシオン",craft: "",hp: 100,pp: 15,satk: 50,ratk: 50,tatk: 50,dex: 0,sdef: 265,rdef: 265,tdef: 265,sreg: 5,rreg: 5,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 5,edreg: 5}),
new UnitParameter({id: "R12-33",unit_type: "rear",rareity: 12,name: "オルゲイグラッジ",craft: "",hp: 40,pp: 10,satk: 90,ratk: 90,tatk: 90,dex: 100,sdef: 248,rdef: 272,tdef: 253,sreg: 4,rreg: 5,treg: 4,efreg: 0,eireg: 0,etreg: 5,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R12-34",unit_type: "rear",rareity: 12,name: "クリシスキブス",craft: "",hp: 90,pp: 10,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 246,rdef: 246,tdef: 246,sreg: 4,rreg: 4,treg: 4,efreg: 3,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 3}),
new UnitParameter({id: "R12-35",unit_type: "rear",rareity: 12,name: "アウェイクディール",craft: "",hp: 120,pp: 6,satk: 30,ratk: 75,tatk: 30,dex: 0,sdef: 235,rdef: 293,tdef: 235,sreg: 3,rreg: 3,treg: 3,efreg: 5,eireg: 5,etreg: 5,ewreg: 5,elreg: 5,edreg: 5}),
new UnitParameter({id: "R13-1",unit_type: "rear",rareity: 13,name: "シュベルキブス",craft: "",hp: 100,pp: 12,satk: 50,ratk: 50,tatk: 50,dex: 0,sdef: 282,rdef: 282,tdef: 282,sreg: 5,rreg: 5,treg: 5,efreg: 4,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 4}),
new UnitParameter({id: "R13-2",unit_type: "rear",rareity: 13,name: "エクディクグラッジ",craft: "",hp: 40,pp: 10,satk: 90,ratk: 90,tatk: 90,dex: 100,sdef: 247,rdef: 272,tdef: 253,sreg: 4,rreg: 5,treg: 4,efreg: 0,eireg: 0,etreg: 5,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R13-3",unit_type: "rear",rareity: 13,name: "ノヴェルフル",craft: "",hp: 180,pp: 3,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 305,rdef: 305,tdef: 305,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R13-4",unit_type: "rear",rareity: 13,name: "アビオンオーブ",craft: "",hp: 20,pp: 23,satk: 60,ratk: 60,tatk: 60,dex: 0,sdef: 263,rdef: 261,tdef: 279,sreg: 4,rreg: 4,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R13-5",unit_type: "rear",rareity: 13,name: "アビオンダスク",craft: "",hp: 20,pp: 23,satk: 60,ratk: 60,tatk: 60,dex: 0,sdef: 279,rdef: 263,tdef: 261,sreg: 5,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "R13-6",unit_type: "rear",rareity: 13,name: "リバレイトフル",craft: "",hp: 60,pp: 15,satk: 75,ratk: 75,tatk: 75,dex: 0,sdef: 275,rdef: 275,tdef: 275,sreg: 4,rreg: 5,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0})
];

export const ARM_UNITS: UnitParameter[] = [
  /* %%arm_units%% */
new UnitParameter({id: "A0",unit_type: "arm",rareity: 0,name: "アームなし",craft: "",hp: 0,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 0,rdef: 0,tdef: 0,sreg: 0,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A11-1",unit_type: "arm",rareity: 11,name: "ブリサオッジ",craft: "",hp: 40,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 211,rdef: 220,tdef: 211,sreg: 3,rreg: 4,treg: 0,efreg: 3,eireg: 0,etreg: 0,ewreg: 3,elreg: 3,edreg: 0}),
new UnitParameter({id: "A11-2",unit_type: "arm",rareity: 11,name: "サイキソウ",craft: "",hp: 50,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 229,rdef: 202,tdef: 238,sreg: 4,rreg: 4,treg: 0,efreg: 0,eireg: 8,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A11-2-1",unit_type: "arm",rareity: 11,name: "サイキソウ",craft: "打撃防御【HP】Lv.10",hp: 100,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 4,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A11-2-2",unit_type: "arm",rareity: 11,name: "サイキソウ",craft: "射撃防御【PP】Lv.10",hp: 0,pp: 10,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 4,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A11-2-3",unit_type: "arm",rareity: 11,name: "サイキソウ",craft: "法撃防御【属性】Lv.10",hp: 30,pp: 3,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 0,treg: 4,efreg: 4,eireg: 4,etreg: 4,ewreg: 4,elreg: 4,edreg: 4}),
new UnitParameter({id: "A11-4",unit_type: "arm",rareity: 11,name: "インヴェンド",craft: "",hp: 60,pp: 6,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 230,rdef: 210,tdef: 220,sreg: 3,rreg: 2,treg: 3,efreg: 2,eireg: 0,etreg: 2,ewreg: 0,elreg: 0,edreg: 3}),
new UnitParameter({id: "A11-5",unit_type: "arm",rareity: 11,name: "オフゼンド",craft: "",hp: 70,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 235,rdef: 215,tdef: 225,sreg: 3,rreg: 4,treg: 3,efreg: 0,eireg: 2,etreg: 0,ewreg: 2,elreg: 2,edreg: 0}),
new UnitParameter({id: "A11-6",unit_type: "arm",rareity: 11,name: "イデアルヤード",craft: "",hp: 0,pp: 10,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 206,rdef: 202,tdef: 202,sreg: 6,rreg: 0,treg: 0,efreg: 2,eireg: 0,etreg: 2,ewreg: 0,elreg: 2,edreg: 0}),
new UnitParameter({id: "A11-7",unit_type: "arm",rareity: 11,name: "ダランフィス",craft: "",hp: 0,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 245,rdef: 225,tdef: 235,sreg: 5,rreg: 4,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 6}),
new UnitParameter({id: "A11-7-1",unit_type: "arm",rareity: 11,name: "ダランフィス",craft: "打撃防御【HP】Lv.10",hp: 100,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 4,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A11-7-2",unit_type: "arm",rareity: 11,name: "ダランフィス",craft: "射撃防御【PP】Lv.10",hp: 0,pp: 10,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 4,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A11-7-3",unit_type: "arm",rareity: 11,name: "ダランフィス",craft: "法撃防御【属性】Lv.10",hp: 30,pp: 3,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 0,treg: 4,efreg: 4,eireg: 4,etreg: 4,ewreg: 4,elreg: 4,edreg: 4}),
new UnitParameter({id: "A12-1",unit_type: "arm",rareity: 12,name: "サーカレイ",craft: "",hp: 50,pp: 9,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 225,rdef: 225,tdef: 225,sreg: 2,rreg: 2,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-2",unit_type: "arm",rareity: 12,name: "サーカユニオン",craft: "",hp: 75,pp: 9,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 229,rdef: 229,tdef: 229,sreg: 2,rreg: 4,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-3",unit_type: "arm",rareity: 12,name: "ホワイティルピナ",craft: "",hp: 0,pp: 20,satk: 20,ratk: 20,tatk: 20,dex: 0,sdef: 193,rdef: 193,tdef: 215,sreg: 0,rreg: 0,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 4,edreg: 0}),
new UnitParameter({id: "A12-5",unit_type: "arm",rareity: 12,name: "ギクスクード",craft: "",hp: 50,pp: 10,satk: 30,ratk: 30,tatk: 30,dex: 0,sdef: 214,rdef: 214,tdef: 214,sreg: 0,rreg: 0,treg: 0,efreg: 2,eireg: 2,etreg: 2,ewreg: 2,elreg: 3,edreg: 3}),
new UnitParameter({id: "A12-6",unit_type: "arm",rareity: 12,name: "デッドリオエスト",craft: "",hp: 150,pp: 0,satk: 40,ratk: 0,tatk: 0,dex: 0,sdef: 229,rdef: 207,tdef: 207,sreg: 3,rreg: 2,treg: 1,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-7",unit_type: "arm",rareity: 12,name: "雷閃イザネシキ",craft: "",hp: 150,pp: 0,satk: 20,ratk: 20,tatk: 20,dex: 20,sdef: 258,rdef: 243,tdef: 243,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 6,ewreg: 0,elreg: 4,edreg: 0}),
new UnitParameter({id: "A12-8",unit_type: "arm",rareity: 12,name: "アストラバイオ",craft: "",hp: 60,pp: 10,satk: 20,ratk: 20,tatk: 20,dex: 0,sdef: 233,rdef: 230,tdef: 236,sreg: 2,rreg: 2,treg: 2,efreg: 2,eireg: 2,etreg: 0,ewreg: 0,elreg: 0,edreg: 2}),
new UnitParameter({id: "A12-9",unit_type: "arm",rareity: 12,name: "フィオガルズ",craft: "",hp: 0,pp: 15,satk: 0,ratk: 40,tatk: 0,dex: 30,sdef: 200,rdef: 229,tdef: 200,sreg: 1,rreg: 4,treg: 1,efreg: 5,eireg: 0,etreg: 5,ewreg: 0,elreg: 0,edreg: 3}),
new UnitParameter({id: "A12-10",unit_type: "arm",rareity: 12,name: "レイガルズ",craft: "",hp: 150,pp: 0,satk: 25,ratk: 25,tatk: 0,dex: 30,sdef: 229,rdef: 200,tdef: 200,sreg: 4,rreg: 1,treg: 1,efreg: 0,eireg: 5,etreg: 0,ewreg: 5,elreg: 5,edreg: 0}),
new UnitParameter({id: "A12-13",unit_type: "arm",rareity: 12,name: "ゼイネシスリタ",craft: "",hp: 120,pp: 4,satk: 15,ratk: 15,tatk: 15,dex: 0,sdef: 240,rdef: 244,tdef: 249,sreg: 2,rreg: 3,treg: 3,efreg: 2,eireg: 2,etreg: 2,ewreg: 2,elreg: 2,edreg: 2}),
new UnitParameter({id: "A12-14",unit_type: "arm",rareity: 12,name: "クリファドリタ",craft: "",hp: 40,pp: 13,satk: 35,ratk: 35,tatk: 35,dex: 0,sdef: 230,rdef: 236,tdef: 231,sreg: 1,rreg: 2,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-15",unit_type: "arm",rareity: 12,name: "ハングボード",craft: "",hp: 50,pp: 10,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 237,rdef: 240,tdef: 246,sreg: 4,rreg: 5,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-16",unit_type: "arm",rareity: 12,name: "イヴリダリット",craft: "",hp: 60,pp: 10,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 234,rdef: 234,tdef: 234,sreg: 3,rreg: 3,treg: 3,efreg: 2,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 2}),
new UnitParameter({id: "A12-19",unit_type: "arm",rareity: 12,name: "ステラウォール",craft: "",hp: 50,pp: 5,satk: 15,ratk: 15,tatk: 15,dex: 15,sdef: 229,rdef: 229,tdef: 229,sreg: 2,rreg: 2,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-20",unit_type: "arm",rareity: 12,name: "フォボスヘッジ",craft: "",hp: 80,pp: 0,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 263,rdef: 263,tdef: 263,sreg: 5,rreg: 5,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-24",unit_type: "arm",rareity: 12,name: "シャライラケラス",craft: "",hp: 0,pp: 17,satk: 85,ratk: 0,tatk: 0,dex: 0,sdef: 286,rdef: 233,tdef: 229,sreg: 4,rreg: 2,treg: 1,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 5}),
new UnitParameter({id: "A12-27",unit_type: "arm",rareity: 12,name: "セレアルローン",craft: "",hp: 70,pp: 7,satk: 20,ratk: 20,tatk: 20,dex: 50,sdef: 236,rdef: 236,tdef: 236,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-28",unit_type: "arm",rareity: 12,name: "ザラアルローン",craft: "",hp: 80,pp: 8,satk: 30,ratk: 30,tatk: 30,dex: 50,sdef: 242,rdef: 242,tdef: 242,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A12-30",unit_type: "arm",rareity: 12,name: "オフゼエンデ",craft: "",hp: 70,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 235,rdef: 215,tdef: 225,sreg: 4,rreg: 5,treg: 4,efreg: 0,eireg: 3,etreg: 0,ewreg: 3,elreg: 3,edreg: 0}),
new UnitParameter({id: "A12-31",unit_type: "arm",rareity: 12,name: "星震装ルシオン",craft: "",hp: 70,pp: 8,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 238,rdef: 238,tdef: 238,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 4}),
new UnitParameter({id: "A12-32",unit_type: "arm",rareity: 12,name: "光跡装ルシオン",craft: "",hp: 100,pp: 15,satk: 50,ratk: 50,tatk: 50,dex: 0,sdef: 265,rdef: 265,tdef: 265,sreg: 5,rreg: 5,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 5,edreg: 5}),
new UnitParameter({id: "A12-34",unit_type: "arm",rareity: 12,name: "クリシスリット",craft: "",hp: 90,pp: 10,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 246,rdef: 246,tdef: 246,sreg: 4,rreg: 4,treg: 4,efreg: 3,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 3}),
new UnitParameter({id: "A12-35",unit_type: "arm",rareity: 12,name: "アウェイクヤード",craft: "",hp: 120,pp: 6,satk: 30,ratk: 30,tatk: 75,dex: 0,sdef: 235,rdef: 235,tdef: 293,sreg: 3,rreg: 3,treg: 3,efreg: 5,eireg: 5,etreg: 5,ewreg: 5,elreg: 5,edreg: 5}),
new UnitParameter({id: "A13-1",unit_type: "arm",rareity: 13,name: "シュベルリット",craft: "",hp: 100,pp: 12,satk: 50,ratk: 50,tatk: 50,dex: 0,sdef: 282,rdef: 282,tdef: 282,sreg: 5,rreg: 5,treg: 5,efreg: 4,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 4}),
new UnitParameter({id: "A13-3",unit_type: "arm",rareity: 13,name: "ノヴェルワン",craft: "",hp: 180,pp: 3,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 305,rdef: 305,tdef: 305,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "A13-6",unit_type: "arm",rareity: 13,name: "リバレイトワン",craft: "",hp: 60,pp: 15,satk: 75,ratk: 75,tatk: 75,dex: 0,sdef: 275,rdef: 275,tdef: 275,sreg: 5,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0})
];

export const LEG_UNITS: UnitParameter[] = [
  /* %%leg_units%% */
new UnitParameter({id: "L0",unit_type: "leg",rareity: 0,name: "レッグなし",craft: "",hp: 0,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 0,rdef: 0,tdef: 0,sreg: 0,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L11-1",unit_type: "leg",rareity: 11,name: "ブリサマーニ",craft: "",hp: 40,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 211,rdef: 220,tdef: 211,sreg: 3,rreg: 4,treg: 0,efreg: 3,eireg: 0,etreg: 0,ewreg: 3,elreg: 3,edreg: 0}),
new UnitParameter({id: "L11-2",unit_type: "leg",rareity: 11,name: "サイキショク",craft: "",hp: 50,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 229,rdef: 202,tdef: 238,sreg: 4,rreg: 4,treg: 0,efreg: 0,eireg: 8,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L11-2-1",unit_type: "leg",rareity: 11,name: "サイキショク",craft: "打撃防御【HP】Lv.10",hp: 100,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 4,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L11-2-2",unit_type: "leg",rareity: 11,name: "サイキショク",craft: "射撃防御【PP】Lv.10",hp: 0,pp: 10,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 4,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L11-2-3",unit_type: "leg",rareity: 11,name: "サイキショク",craft: "法撃防御【属性】Lv.10",hp: 30,pp: 3,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 0,treg: 4,efreg: 4,eireg: 4,etreg: 4,ewreg: 4,elreg: 4,edreg: 4}),
new UnitParameter({id: "L11-4",unit_type: "leg",rareity: 11,name: "インヴェリーフ",craft: "",hp: 60,pp: 6,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 230,rdef: 210,tdef: 220,sreg: 3,rreg: 2,treg: 3,efreg: 2,eireg: 0,etreg: 2,ewreg: 0,elreg: 0,edreg: 3}),
new UnitParameter({id: "L11-5",unit_type: "leg",rareity: 11,name: "オフゼリーフ",craft: "",hp: 70,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 235,rdef: 215,tdef: 225,sreg: 4,rreg: 3,treg: 3,efreg: 0,eireg: 2,etreg: 0,ewreg: 2,elreg: 2,edreg: 0}),
new UnitParameter({id: "L11-6",unit_type: "leg",rareity: 11,name: "イデアルラーナ",craft: "",hp: 100,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 206,rdef: 202,tdef: 202,sreg: 0,rreg: 3,treg: 3,efreg: 0,eireg: 2,etreg: 0,ewreg: 2,elreg: 0,edreg: 2}),
new UnitParameter({id: "L11-7",unit_type: "leg",rareity: 11,name: "ダリルフィス",craft: "",hp: 0,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 245,rdef: 225,tdef: 235,sreg: 5,rreg: 4,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 6}),
new UnitParameter({id: "L11-7-1",unit_type: "leg",rareity: 11,name: "ダリルフィス",craft: "打撃防御【HP】Lv.10",hp: 100,pp: 0,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 4,rreg: 0,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L11-7-2",unit_type: "leg",rareity: 11,name: "ダリルフィス",craft: "射撃防御【PP】Lv.10",hp: 0,pp: 10,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 4,treg: 0,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L11-7-3",unit_type: "leg",rareity: 11,name: "ダリルフィス",craft: "法撃防御【属性】Lv.10",hp: 30,pp: 3,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 240,rdef: 220,tdef: 220,sreg: 0,rreg: 0,treg: 4,efreg: 4,eireg: 4,etreg: 4,ewreg: 4,elreg: 4,edreg: 4}),
new UnitParameter({id: "L11-8",unit_type: "leg",rareity: 11,name: "オービットセル",craft: "",hp: 50,pp: 7,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 225,rdef: 235,tdef: 215,sreg: 2,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 3,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-1",unit_type: "leg",rareity: 12,name: "サークレイ",craft: "",hp: 50,pp: 9,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 225,rdef: 225,tdef: 225,sreg: 2,rreg: 2,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-2",unit_type: "leg",rareity: 12,name: "サークユニオン",craft: "",hp: 75,pp: 9,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 229,rdef: 229,tdef: 229,sreg: 2,rreg: 2,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-3",unit_type: "leg",rareity: 12,name: "ホワイティルエア",craft: "",hp: 0,pp: 20,satk: 20,ratk: 20,tatk: 20,dex: 0,sdef: 193,rdef: 193,tdef: 215,sreg: 0,rreg: 0,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 4,edreg: 0}),
new UnitParameter({id: "L12-7",unit_type: "leg",rareity: 12,name: "雷閃イザネツチ",craft: "",hp: 150,pp: 0,satk: 20,ratk: 20,tatk: 20,dex: 20,sdef: 258,rdef: 243,tdef: 243,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 6,ewreg: 0,elreg: 4,edreg: 0}),
new UnitParameter({id: "L12-8",unit_type: "leg",rareity: 12,name: "アストラライズ",craft: "",hp: 60,pp: 10,satk: 20,ratk: 20,tatk: 20,dex: 0,sdef: 233,rdef: 230,tdef: 236,sreg: 2,rreg: 2,treg: 2,efreg: 2,eireg: 2,etreg: 0,ewreg: 0,elreg: 0,edreg: 2}),
new UnitParameter({id: "L12-13",unit_type: "leg",rareity: 12,name: "ゼイネシスレム",craft: "",hp: 120,pp: 4,satk: 15,ratk: 15,tatk: 15,dex: 0,sdef: 240,rdef: 244,tdef: 249,sreg: 3,rreg: 2,treg: 3,efreg: 2,eireg: 2,etreg: 2,ewreg: 2,elreg: 2,edreg: 2}),
new UnitParameter({id: "L12-14",unit_type: "leg",rareity: 12,name: "クリファドレム",craft: "",hp: 40,pp: 13,satk: 35,ratk: 35,tatk: 35,dex: 0,sdef: 230,rdef: 236,tdef: 231,sreg: 2,rreg: 1,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-15",unit_type: "leg",rareity: 12,name: "タッグボード",craft: "",hp: 50,pp: 10,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 246,rdef: 237,tdef: 240,sreg: 4,rreg: 4,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-16",unit_type: "leg",rareity: 12,name: "イヴリダセルブ",craft: "",hp: 60,pp: 10,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 234,rdef: 234,tdef: 234,sreg: 3,rreg: 3,treg: 3,efreg: 2,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 2}),
new UnitParameter({id: "L12-19",unit_type: "leg",rareity: 12,name: "ステラウォール",craft: "",hp: 50,pp: 5,satk: 15,ratk: 15,tatk: 15,dex: 15,sdef: 229,rdef: 229,tdef: 229,sreg: 2,rreg: 2,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-20",unit_type: "leg",rareity: 12,name: "フォボスニード",craft: "",hp: 80,pp: 0,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 263,rdef: 263,tdef: 263,sreg: 5,rreg: 5,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-25",unit_type: "leg",rareity: 12,name: "アリュールエイド",craft: "",hp: 0,pp: 17,satk: 0,ratk: 85,tatk: 0,dex: 0,sdef: 229,rdef: 286,tdef: 233,sreg: 1,rreg: 4,treg: 2,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 5}),
new UnitParameter({id: "L12-27",unit_type: "leg",rareity: 12,name: "セレマウニア",craft: "",hp: 70,pp: 7,satk: 20,ratk: 20,tatk: 20,dex: 50,sdef: 236,rdef: 236,tdef: 236,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-28",unit_type: "leg",rareity: 12,name: "ザラマウニア",craft: "",hp: 80,pp: 8,satk: 30,ratk: 30,tatk: 30,dex: 50,sdef: 242,rdef: 242,tdef: 242,sreg: 3,rreg: 3,treg: 3,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L12-30",unit_type: "leg",rareity: 12,name: "オフゼトロジー",craft: "",hp: 70,pp: 5,satk: 0,ratk: 0,tatk: 0,dex: 0,sdef: 235,rdef: 215,tdef: 225,sreg: 5,rreg: 4,treg: 4,efreg: 0,eireg: 3,etreg: 0,ewreg: 3,elreg: 3,edreg: 0}),
new UnitParameter({id: "L12-31",unit_type: "leg",rareity: 12,name: "星震飾ディシオン",craft: "",hp: 70,pp: 8,satk: 25,ratk: 25,tatk: 25,dex: 0,sdef: 238,rdef: 238,tdef: 238,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 4}),
new UnitParameter({id: "L12-32",unit_type: "leg",rareity: 12,name: "光跡飾ディシオン",craft: "",hp: 100,pp: 15,satk: 50,ratk: 50,tatk: 50,dex: 0,sdef: 265,rdef: 265,tdef: 265,sreg: 5,rreg: 5,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 5,edreg: 5}),
new UnitParameter({id: "L12-34",unit_type: "leg",rareity: 12,name: "クリシスセルブ",craft: "",hp: 90,pp: 10,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 246,rdef: 246,tdef: 246,sreg: 4,rreg: 4,treg: 4,efreg: 3,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 3}),
new UnitParameter({id: "L12-35",unit_type: "leg",rareity: 12,name: "アウェイクラーナ",craft: "",hp: 120,pp: 6,satk: 75,ratk: 30,tatk: 30,dex: 0,sdef: 293,rdef: 235,tdef: 235,sreg: 3,rreg: 3,treg: 3,efreg: 5,eireg: 5,etreg: 5,ewreg: 5,elreg: 5,edreg: 5}),
new UnitParameter({id: "L13-1",unit_type: "leg",rareity: 13,name: "シュベルセルブ",craft: "",hp: 100,pp: 12,satk: 50,ratk: 50,tatk: 50,dex: 0,sdef: 282,rdef: 282,tdef: 282,sreg: 5,rreg: 5,treg: 5,efreg: 4,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 4}),
new UnitParameter({id: "L13-3",unit_type: "leg",rareity: 13,name: "ノヴェルマス",craft: "",hp: 180,pp: 3,satk: 40,ratk: 40,tatk: 40,dex: 0,sdef: 305,rdef: 305,tdef: 305,sreg: 4,rreg: 4,treg: 4,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0}),
new UnitParameter({id: "L13-6",unit_type: "leg",rareity: 13,name: "リバレイトマス",craft: "",hp: 60,pp: 15,satk: 75,ratk: 75,tatk: 75,dex: 0,sdef: 275,rdef: 275,tdef: 275,sreg: 4,rreg: 4,treg: 5,efreg: 0,eireg: 0,etreg: 0,ewreg: 0,elreg: 0,edreg: 0})
];

export const UNIT_SETS: UnitSetParameter[] = [
  /* %%unit_sets%% */
new UnitSetParameter({id:"S11-1", unit_type:"set", rear_units:["ブリサエーリ"], arm_units:["ブリサオッジ"], leg_units:["ブリサマーニ"], hp:80, pp:5, satk:70, ratk:70, tatk:70, dex:50, sdef:0, rdef:0, tdef:0, sreg:0, rreg:0, treg:0, efreg:0, eireg:9, etreg:9, ewreg:0, elreg:0, edreg:9}),
new UnitSetParameter({id:"S11-2", unit_type:"set", rear_units:["サイキホウヨク"], arm_units:["サイキソウ"], leg_units:["サイキショク"], hp:0, pp:25, satk:60, ratk:60, tatk:60, dex:80, sdef:0, rdef:0, tdef:0, sreg:0, rreg:0, treg:0, efreg:0, eireg:0, etreg:0, ewreg:0, elreg:0, edreg:0}),
new UnitSetParameter({id:"S11-4", unit_type:"set", rear_units:["インヴェルム"], arm_units:["インヴェンド"], leg_units:[], hp:0, pp:10, satk:70, ratk:70, tatk:70, dex:50, sdef:0, rdef:0, tdef:0, sreg:0, rreg:0, treg:0, efreg:3, eireg:0, etreg:3, ewreg:0, elreg:0, edreg:3}),
new UnitSetParameter({id:"S11-5", unit_type:"set", rear_units:["オフゼルム"], arm_units:["オフゼンド"], leg_units:[], hp:50, pp:20, satk:60, ratk:60, tatk:60, dex:50, sdef:0, rdef:0, tdef:0, sreg:0, rreg:0, treg:0, efreg:0, eireg:3, etreg:0, ewreg:3, elreg:3, edreg:0}),
new UnitSetParameter({id:"S11-6", unit_type:"set", rear_units:["イデアルディール"], arm_units:[], leg_units:["イデアルラーナ"], hp:50, pp:5, satk:75, ratk:75, tatk:75, dex:40, sdef:0, rdef:80, tdef:80, sreg:0, rreg:0, treg:0, efreg:0, eireg:2, etreg:0, ewreg:2, elreg:0, edreg:2}),
new UnitSetParameter({id:"S11-7", unit_type:"set", rear_units:[], arm_units:["ダランフィス"], leg_units:["ダリルフィス"], hp:120, pp:20, satk:0, ratk:0, tatk:0, dex:60, sdef:0, rdef:0, tdef:0, sreg:0, rreg:0, treg:0, efreg:0, eireg:0, etreg:0, ewreg:0, elreg:0, edreg:0}),
new UnitSetParameter({id:"S12-30", unit_type:"set", rear_units:["オフゼテリオス"], arm_units:["オフゼエンデ"], leg_units:[], hp:50, pp:20, satk:80, ratk:80, tatk:80, dex:50, sdef:0, rdef:0, tdef:0, sreg:0, rreg:0, treg:0, efreg:0, eireg:3, etreg:0, ewreg:3, elreg:3, edreg:0}),
new UnitSetParameter({id:"S0", unit_type:"set", rear_units:[], arm_units:[], leg_units:[], hp:0, pp:0, satk:0, ratk:0, tatk:0, dex:0, sdef:0, rdef:0, tdef:0, sreg:0, rreg:0, treg:0, efreg:0, eireg:0, etreg:0, ewreg:0, elreg:0, edreg:0})
];
