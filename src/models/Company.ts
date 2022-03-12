export class Company {
	name: string;
	description: string;

	constructor(company: Company) {
		this.name = company.name;
		this.description = company.description;
	}
}
