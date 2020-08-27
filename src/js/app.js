class ErrorRepository {
  constructor(errors) {
    this.errors = new Map();
  }

  translate(code) {
    if (this.errors.has(code) === true) {
      console.log(this.errors.get(code))
    };
  }
}

const CarErrors = new ErrorRepository;

CarErrors.errors.set(17888, 'вакуумный насос тормозной системы');
CarErrors.errors.set(23241, 'слишком высокая температура заслонок впускных каналов');
CarErrors.errors.set(17038, 'сбой в электрической цепи выходного сигнала оборота двигателя');
CarErrors.errors.set(41886, 'обрыв цепи сигнала света заднего хода');
CarErrors.errors.set(51876, 'обрыв цепи клапана передней опоры силового агрегата');

console.log(CarErrors.errors);

CarErrors.translate(17888);