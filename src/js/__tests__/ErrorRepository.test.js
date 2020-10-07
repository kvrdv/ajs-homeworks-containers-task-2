import ErrorRepository from "../ErrorRepository";

const CarErrors = new ErrorRepository();

test("Ошибка 17888 - success", () => {
  expect(CarErrors.translate(17888)).toBe('вакуумный насос тормозной системы');
});

test("Ошибка 23241 - success", () => {
  expect(CarErrors.translate(23241)).toBe("слишком высокая температура заслонок впускных каналов");
});

test("Ошибка 17038 - success", () => {
  expect(CarErrors.translate(17038)).toBe("сбой в электрической цепи выходного сигнала оборота двигателя");
});