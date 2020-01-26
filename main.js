const companies = [
  { name: 'Company One', category: 'Finance', startDate: 1981, endDate: 2003 },
  { name: 'Company Two', category: 'Entertainment', startDate: 1981, endDate: 2010 },
  { name: 'Company Three', category: 'Transport', startDate: 1992, endDate: 2015 },
  { name: 'Company Four', category: 'Technology', startDate: 1983, endDate: 2016 },
  { name: 'Company Five', category: 'Health', startDate: 1983, endDate: 2003 },
  { name: 'Company Six', category: 'Pharmacy', startDate: 1999, endDate: 2003 },
  { name: 'Company Seven', category: 'Transport', startDate: 1995, endDate: 2015 },
  { name: 'Company Eight', category: 'Health', startDate: 1981, endDate: 2003 },
  { name: 'Company Nine', category: 'Finance', startDate: 1995, endDate: 2003 },
  { name: 'Company Ten', category: 'Entertainment', startDate: 1992, endDate: 2012 },
  { name: 'Company Eleven', category: 'Transport', startDate: 1983, endDate: 2015 },
  { name: 'Company Twelve', category: 'Health', startDate: 1981, endDate: 2003 },
  { name: 'Company Thirteen', category: 'Technology', startDate: 1981, endDate: 2008 },
  { name: 'Company Fourteen', category: 'Finance', startDate: 1992, endDate: 2003 },
  { name: 'Company Fifteen', category: 'Health', startDate: 1983, endDate: 2015 },
  { name: 'Company Sixteen', category: 'Entertainment', startDate: 1981, endDate: 2003 },
  { name: 'Company Seventeen', category: 'Entertainment', startDate: 1995, endDate: 2015 },
  { name: 'Company Eighteen', category: 'Technology', startDate: 1992, endDate: 2012 },
  { name: 'Company Nineteen', category: 'Finance', startDate: 1981, endDate: 2003 },
  { name: 'Company Twenty', category: 'Health', startDate: 1995, endDate: 2012 },
]

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i].name)
// }

//displays names of all companies

// companies.forEach(company => console.log(company.name))

//displays companies with age>20

const filteredCompanies = companies.filter(company => {
  const companyAge = company.endDate - company.startDate
  if (companyAge > 20) {
    return true
  }
})

console.log(filteredCompanies)
