export default class ErrorRepository {
  constructor(errors) {
    this.errors = new Map([
      [17888, 'вакуумный насос тормозной системы'],
      [23241, 'слишком высокая температура заслонок впускных каналов'],
      [17038, 'сбой в электрической цепи выходного сигнала оборота двигателя'],
      [41886, 'обрыв цепи сигнала света заднего хода'],
      [51876, 'обрыв цепи клапана передней опоры силового агрегата']
    ]);
  }

  translate(code) {
    if (this.errors.has(code) === true) {
      return this.errors.get(code)
    } else throw new Error('Ошибка не найдена');
  }
}

const CarErrors = new ErrorRepository();