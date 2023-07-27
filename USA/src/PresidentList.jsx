import React from "react";

const presidents = [
    {id:1, firstName:'George', lastName:'Washington',  yearsInOffice:'1789-1797',  wikiLink: 'https://en.wikipedia.org/wiki/George_Washington' },
    {id:2,firstName: 'John', lastName: 'Adams', yearsInOffice: '1797-1801', wikiLink: 'https://en.wikipedia.org/wiki/John_Adams'},
    {id:3,firstName:"Thomas", lastName: "Jefferson", yearsInOffice:"1801-1809", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B9%D5%B8%D5%B4%D5%A1%D5%BD_%D5%8B%D5%A5%D6%86%D5%A5%D6%80%D5%BD%D5%B8%D5%B6"},
    {id:4, firstName:"James",lastName:"Madison", yearsInOffice:"1809-1817", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%A5%D5%B5%D5%B4%D5%BD_%D5%84%D5%A5%D5%A4%D5%AB%D5%BD%D5%B8%D5%B6_(%D6%84%D5%A1%D5%B2%D5%A1%D6%84%D5%A1%D5%AF%D5%A1%D5%B6_%D5%A3%D5%B8%D6%80%D5%AE%D5%AB%D5%B9)"},
    {id:5, firstName:"James",lastName:'Monroe', yearsInOffice:"1817-1825"},
    {id:6, firstName:"John Quincy", lastName:"Adams", yearsInOffice:"1825-1829", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%B8%D5%B6_%D5%94%D5%BE%D5%AB%D5%B6%D5%BD%D5%AB_%D4%B1%D5%A4%D5%A1%D5%B4%D5%BD"}, 
    {id:7, firstName:"Andrew", lastName:"Jackson", yearsInOffice:"1829-1837", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B7%D5%B6%D5%A4%D6%80%D5%B5%D5%B8%D6%82_%D5%8B%D5%A5%D6%84%D5%BD%D5%B8%D5%B6"},
    {id:8, firstName:"Martin Van", lastName:"Buren", yearsInOffice:"1837-1841", wikiLink:"https://hy.wikipedia.org/wiki/%D5%84%D5%A1%D6%80%D5%BF%D5%AB%D5%B6_%D5%8E%D5%A1%D5%B6_%D4%B2%D5%B5%D5%B8%D6%82%D6%80%D5%A5%D5%B6"},
    {id:9, firstName:"William", lastName:"Harrison", yearsInOffice:"March 4 1841- April 4 1841", wikiLink:"https://hy.wikipedia.org/wiki/%D5%88%D6%82%D5%AB%D5%AC%D5%B5%D5%A1%D5%B4_%D5%80%D5%A1%D6%80%D5%AB%D5%BD%D5%B8%D5%B6"},
    {id:10, firstName:"John", lastName:"Tyler", yearsInOffice:"1841-1845", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%B8%D5%B6_%D4%B9%D5%A1%D5%B5%D5%AC%D5%A5%D6%80"},
    {id:11, firstName:"James Knox", lastName:"Polk", yearsInOffice:"1845-1849", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%A5%D5%B5%D5%B4%D5%BD_%D5%86%D5%B8%D6%84%D5%BD_%D5%93%D5%B8%D5%AC%D5%AF"},
    {id:12, firstName:"Zachary", lastName:"Taylor", yearsInOffice:"1849-1850", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B6%D5%A1%D6%84%D5%A1%D6%80%D5%AB_%D4%B9%D5%A5%D5%B5%D5%AC%D5%B8%D6%80"},
    {id:13, firstName:"Millard", lastName:"Fillmore", yearsInOffice:"1850-1853", wikiLink:"https://hy.wikipedia.org/wiki/%D5%84%D5%AB%D5%AC%D5%AC%D5%A1%D6%80%D5%A4_%D5%96%D5%AB%D5%AC%D5%B4%D5%B8%D6%80"},
    {id:14, firstName:"Franklin", lastName:"Pierce", yearsInOffice:"1853-1857", wikiLink:"https://hy.wikipedia.org/wiki/%D5%96%D6%80%D5%A1%D5%B6%D5%AF%D5%AC%D5%AB%D5%B6_%D5%93%D5%AB%D6%80%D5%BD"},
    {id:15, firstName:"James", lastName:"Buchanan", yearsInOffice:"1857-1861", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%A5%D5%B5%D5%B4%D5%BD_%D4%B2%D5%B5%D5%B8%D6%82%D6%84%D5%A1%D5%B6%D5%A1%D5%B6_%D4%BF%D6%80%D5%BF%D5%BD%D5%A5%D6%80"},
    {id:16, firstName:"Abraham", lastName:"Lincoln", yearsInOffice:"1861-1865", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B1%D5%A2%D6%80%D5%A1%D5%B0%D5%A1%D5%B4_%D4%BC%D5%AB%D5%B6%D6%84%D5%B8%D5%AC%D5%B6"},
    {id:17, firstName:"Andrew", lastName:"Johnson", yearsInOffice:"1865-1869",wikiLink:"https://hy.wikipedia.org/wiki/%D4%B7%D5%B6%D5%A4%D6%80%D5%B5%D5%B8%D6%82_%D5%8B%D5%B8%D5%B6%D5%BD%D5%B8%D5%B6"},
    {id:18, firstName:"Ulysses", lastName:"Grant", yearsInOffice:"1869-1877", wikiLink:"https://hy.wikipedia.org/wiki/%D5%88%D6%82%D5%AC%D5%AB%D5%BD%D5%A5%D5%BD_%D5%8D._%D4%B3%D6%80%D5%A1%D5%B6%D5%A9"},
    {id:19, firstName:"Rutherford", lastName:"Birchard Hayes",yearsInOffice:"1877-1881", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8C%D5%B8%D6%82%D5%A9%D5%A5%D6%80%D6%86%D5%B8%D6%80%D5%A4_%D4%B2._%D5%80%D5%A5%D5%B5%D5%BD"},
    {id:20, firstName:"James", lastName:"Garfield", yearsInOffice:"March 4 1881-September 19 1881", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%A5%D5%B5%D5%B4%D5%BD_%D4%B3%D5%A1%D6%80%D6%86%D5%AB%D5%AC%D5%A4"},
    {id:21, firstName:"Chester", lastName:"Allen Arthur", yearsInOffice:"1881-1885", wikiLink:"https://hy.wikipedia.org/wiki/%D5%89%D5%A5%D5%BD%D5%A9%D5%A5%D6%80_%D4%B1._%D4%B1%D6%80%D5%A9%D5%B8%D6%82%D6%80"},
    {id:22, firstName:"Stephen", lastName:"Grover Cleveland", yearsInOffice:"1885-1889", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B3%D6%80%D5%B8%D5%BE%D5%A5%D6%80_%D5%94%D5%AC%D5%AB%D5%BE%D5%AC%D5%A5%D5%B6%D5%A4"},
    {id:23, firstName:"Benjamin", lastName:"Harrison", yearsInOffice:"1889-1893", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B2%D5%A5%D5%B6%D5%BB%D5%A1%D5%B4%D5%AB%D5%B6_%D5%80%D5%A1%D6%80%D6%80%D5%AB%D5%BD%D5%B8%D5%B6"},
    {id:24, firstName:"Stephen", lastName:"Cleveland", yearsInOffice:"1893-1897", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B3%D6%80%D5%B8%D5%BE%D5%A5%D6%80_%D5%94%D5%AC%D5%AB%D5%BE%D5%AC%D5%A5%D5%B6%D5%A4"},
    {id:25, firstName:"William",lastName:"McKinley", yearsInOffice:"1897-1901", wikiLink:"https://hy.wikipedia.org/wiki/%D5%88%D6%82%D5%AB%D5%AC%D5%AB%D5%A1%D5%B4_%D5%84%D5%A1%D6%84-%D5%94%D5%AB%D5%B6%D5%AC%D5%AB"},
    {id:26, firstName:"Theodore", lastName:"Roosevelt", yearsInOffice:"1901-1909", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B9%D5%A5%D5%B8%D5%A4%D5%B8%D6%80_%D5%8C%D5%B8%D6%82%D5%A6%D5%BE%D5%A5%D5%AC%D5%BF"},
    {id:27, firstName:"William", lastName:"Taft", yearsInOffice:"1909-1913", wikiLink:"https://hy.wikipedia.org/wiki/%D5%88%D6%82%D5%AB%D5%AC%D5%B5%D5%A1%D5%B4_%D5%8F%D5%A1%D6%86%D5%BF"},
    {id:28, firstName:"Woodrow", lastName:"Wilson", yearsInOffice:"1913-1921", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8E%D5%B8%D6%82%D5%A4%D6%80%D5%B8_%D5%8E%D5%AB%D5%AC%D5%BD%D5%B8%D5%B6"},
    {id:29, firstName:"Warren", lastName:"Harding", yearsInOffice:"1921-1923", wikiLink:"https://hy.wikipedia.org/wiki/%D5%88%D6%82%D5%B8%D6%80%D5%A5%D5%B6_%D5%80%D5%A1%D6%80%D5%A4%D5%AB%D5%B6%D5%A3"},
    {id:30, firstName:"Calvin", lastName:"Coolidge", yearsInOffice:"1923-1929", wikiLink:"https://hy.wikipedia.org/wiki/%D5%94%D5%A1%D5%AC%D5%BE%D5%AB%D5%B6_%D5%94%D5%B8%D6%82%D5%AC%D5%AB%D5%BB"},
    {id:31, firstName:"Herbert", lastName:"Hoover", yearsInOffice:"1929-1933", wikiLink:"https://hy.wikipedia.org/wiki/%D5%80%D5%A5%D6%80%D5%A2%D5%A5%D6%80%D5%BF_%D5%80%D5%B8%D6%82%D5%BE%D5%A5%D6%80"},
    {id:32, firstName:"Franklin", lastName:"Delano Roosevelt", yearsInOffice:"1933-1945", wikiLink:"https://hy.wikipedia.org/wiki/%D5%96%D6%80%D5%A1%D5%B6%D5%AF%D5%AC%D5%AB%D5%B6_%D4%B4._%D5%8C%D5%B8%D6%82%D5%A6%D5%BE%D5%A5%D5%AC%D5%BF"},
    {id:33, firstName:"Harry", lastName:"Truman", yearsInOffice:"1945-1953", wikiLink:"https://hy.wikipedia.org/wiki/%D5%80%D5%A1%D6%80%D5%AB_%D5%8D._%D4%B9%D6%80%D5%B8%D6%82%D5%B4%D5%A1%D5%B6"},
    {id:34, firstName:"Dwight", lastName:"Eisenhower", yearsInOffice:"1953-1961", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B4%D5%B8%D6%82%D5%A1%D5%B5%D5%A9_%D4%B7%D5%B5%D5%A6%D5%A5%D5%B6%D5%B0%D5%A1%D5%B8%D6%82%D5%A5%D6%80"},
    {id:35, firstName:"John", lastName:"Fitzgerald Kennedy", yearsInOffice:"1961-1963", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%B8%D5%B6_%D5%96._%D5%94%D5%A5%D5%B6%D5%A5%D5%A4%D5%AB"},
    {id:36, firstName:"Lyndon", lastName:"Baines Johnson", yearsInOffice:"1963-1969", wikiLink:"https://hy.wikipedia.org/wiki/%D4%BC%D5%AB%D5%B6%D5%A4%D5%B8%D5%B6_%D4%B2._%D5%8B%D5%B8%D5%B6%D5%BD%D5%B8%D5%B6"},
    {id:37, firstName:"Richard", lastName:"Nixon", yearsInOffice:"1969-1974", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8C%D5%AB%D5%B9%D5%A1%D6%80%D5%A4_%D5%86%D5%AB%D6%84%D5%BD%D5%B8%D5%B6"},
    {id:38, firstName:"Gerald", lastName:"Ford", yearsInOffice:"1974-1977", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%A5%D6%80%D5%A1%D5%AC%D5%A4_%D5%96%D5%B8%D6%80%D5%A4"},
    {id:39, firstName:"Jimmy", lastName:"Karter", yearsInOffice:"1977-1981", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%AB%D5%B4%D5%AB_%D5%94%D5%A1%D6%80%D5%A9%D5%A5%D6%80"},
    {id:40, firstName:"Ronald", lastName:"Reagan", yearsInOffice:"1981-1989", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8C%D5%B8%D5%B6%D5%A1%D5%AC%D5%A4_%D5%8C%D5%A5%D5%B5%D5%A3%D5%A1%D5%B6"},
    {id:41, firstName:"George", lastName:"Bush", yearsInOffice:"1989-1993", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%B8%D6%80%D5%BB_%D5%80._%D5%88%D6%82._%D4%B2%D5%B8%D6%82%D5%B7"},
    {id:42, firstName:"Bill", lastName:"Clinton", yearsInOffice:"1993-2001", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B2%D5%AB%D5%AC_%D5%94%D5%AC%D5%AB%D5%B6%D5%A9%D5%B8%D5%B6"},
    {id:43, firstName:"George", lastName:"Bush", yearsInOffice:"2001-2009", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%B8%D6%80%D5%BB_%D5%88%D6%82._%D4%B2%D5%B8%D6%82%D5%B7"},
    {id:44, firstName:"Barack", lastName:"Obama", yearsInOffice:"2009-2017", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B2%D5%A1%D6%80%D5%A1%D6%84_%D5%95%D5%A2%D5%A1%D5%B4%D5%A1"},
    {id:45, firstName:"Donald", lastName:"Trump", yearsInOffice:"2017-2021", wikiLink:"https://hy.wikipedia.org/wiki/%D4%B4%D5%B8%D5%B6%D5%A1%D5%AC%D5%A4_%D4%B9%D6%80%D5%A1%D5%B4%D6%83"},
    {id:46, firstName:"Joe", lastName:"Biden", yearsInOffice:"2021", wikiLink:"https://hy.wikipedia.org/wiki/%D5%8B%D5%B8_%D4%B2%D5%A1%D5%B5%D5%A4%D5%A5%D5%B6"},

]

function PresidentList(){
    return (
        <div>
          <table className="president-table">
            <caption><h3>List of US Presidents</h3></caption>

            <thead>
              <tr>
                <th>N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Years in Office</th>
              </tr>
            </thead>
            <tbody>
              {presidents.map((president) => (
                <tr key={president.id}>
                <td>{president.id}</td>
                  <td>
                    <a href={president.wikiLink} target="_blank" rel="noopener noreferrer">
                      {president.firstName}
                    </a>
                  </td>
                  <td>
                    <a href={president.wikiLink} target="_blank" rel="noopener noreferrer">
                      {president.lastName}
                    </a>
                  </td>
                  <td>{president.yearsInOffice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
export default PresidentList;