import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Pedro', 'Souza', '111.111');
    expect(sut).toHaveProperty('firstName', 'Pedro');
    expect(sut).toHaveProperty('lastName', 'Souza');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Pedro', 'Souza', '111.111');
    expect(sut.getName()).toBe('Pedro Souza');
    expect(sut.getIDN()).toBe('111.111');
  });
});
describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Aluraa', '222-222');
    expect(sut).toHaveProperty('name', 'Aluraa');
    expect(sut).toHaveProperty('cnpj', '222-222');
  });

  it('should have methods get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Aluraa', '222-222');
    expect(sut.getName()).toBe('Aluraa');
    expect(sut.getIDN()).toBe('222-222');
  });
});
