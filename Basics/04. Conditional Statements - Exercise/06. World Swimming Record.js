function WorldSwimmingRecord(Input) {
  let RecordSec = Number(Input[0]);
  let distanceMeters = Number(Input[1]);
  let meterTime = Number(Input[2]);

  let IvanTrqbvaDaPrepluva = distanceMeters * meterTime;
  let zabavqne = Math.floor(distanceMeters / 15) * 12.5;

  let Time = IvanTrqbvaDaPrepluva + zabavqne;

  if (RecordSec <= Time) {
    console.log(
      `No, he failed! He was ${(Time - RecordSec).toFixed(2)} seconds slower.`
    );
  } else if (RecordSec > Time) {
    console.log(
      `Yes, he succeeded! The new world record is ${Time.toFixed(2)} seconds.`
    );
  }
}
