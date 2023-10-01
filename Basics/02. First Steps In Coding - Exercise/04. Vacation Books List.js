function VacationBooksList(Input) {
  let BroiStranici = Number(Input[0]);
  let BroiStraniciZaEdinChas = Number(Input[1]);
  let BroiDni = Number(Input[2]);

  let BroiChasoveNaDen = BroiStranici / BroiStraniciZaEdinChas / BroiDni;
  console.log(BroiChasoveNaDen);
}
