import { ICompany } from 'data/companies';

export default function Card({ company }: { company: ICompany }) {
  // TODO:
  return (
    <li>
      <h2>{company.name}</h2>
      <div>
        <h3>Address:</h3>
        <h6>{company.address}</h6>
      </div>
      <div>
        <h3>Revenue:</h3>
        <h6>{company.revenue}</h6>
      </div>
      <div>
        <h3>Phone No:</h3>
        <h6>
          <span>{company.code}</span>
          {company.phone}
        </h6>
      </div>
    </li>
  );
}
