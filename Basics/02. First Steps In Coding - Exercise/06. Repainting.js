function Repainting(Input) {
  let PredpazenNailon = 1.5;
  let Boq = 14.5;
  let razreditelZaBoq = 5;

  PredpazenNailon = PredpazenNailon * (2 + Number(Input[0]));
  Boq *= Number(Input[1]) * 1.1;
  razreditelZaBoq *= Number(Input[2]);
  obshtaSuma = PredpazenNailon + Boq + razreditelZaBoq + 0.4;
  SumaMaistori = obshtaSuma * 0.3 * Number(Input[3]);
  obshtaSuma += SumaMaistori;
  console.log(obshtaSuma);
}
