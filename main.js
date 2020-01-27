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

// const over20Companies = companies.filter(company => {
//   const companyAge = company.endDate - company.startDate
//   if (companyAge > 20) {
//     return true
//   }
// })

// console.log(over20Companies)

//displays names of companies from Technology sector

// const technologySector = companies.reduce((prev, current) => {
//   if (current.category === 'Technology') {
//     prev.push(current.name)
//   }
//   return prev
// }, [])

// console.log(technologySector)

//displays companies sorted by start-date

// const sortedCompanies = companies.sort((a, b) => (a.startDate > b.startDate ? 1 : -1))

// console.log(sortedCompanies)

//displays average age of all companies

// const averageAge = companies.reduce((prev, current) => {
//   const age = current.endDate - current.startDate

//   return (prev + age)
// }, 0) / companies.length

// console.log(averageAge)

//displays companies of Entertainment sector which were started after 1990

// const entertainmentCompanies = companies
//   .filter(company => company.category === 'Entertainment' && company.startDate > 1990)

// console.log(entertainmentCompanies)

//displays age sum of all companies

// const totalAge = companies.reduce((total, company) => {
//   const age = company.endDate - company.startDate
//   return total + age
// }, 0)

// console.log(totalAge)
