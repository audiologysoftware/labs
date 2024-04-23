


import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import peopleData from '../data/people.json';
import Person from '../components/people/Person';
import PositionContext from '../store/RouteContextProvider';

export default function People() {
  const { current } = useContext(PositionContext)
  const { advisors, externalAdvisors, researchScholars, students, alumni, members } = peopleData[current - 1];

  return (
    <div>
      <Layout>
        <div>
          <div>
            <h2>Advisor</h2>
            <div>
              {advisors.map((advisor, index) => (
                <Person key={index} path={advisor.path} name={advisor.name} designation={advisor.designation} address={advisor.address} email={advisor.email} />
              ))}
            </div>
          </div>
          <div>
            {externalAdvisors.length > 0 && (
              <h2>External Advisors</h2>
            )}
            <div>
              {externalAdvisors.map((advisor, index) => (
                <Person key={index} path={advisor.path} name={advisor.name} designation={advisor.designation} address={advisor.address} email={advisor.email} />
              ))}
            </div>

          </div>
          <div>
            {researchScholars.length > 0 && (
              <h2>Research Scholars</h2>
            )}

            <div>
              {researchScholars.map((scholar, index) => (
                <Person key={index} path={scholar.path} name={scholar.name} areaOfInterest={scholar.areaOfInterest} topic={scholar.topic} />
              ))}
            </div>
          </div>
         
          {members.length > 0 && (
            <h2>Members</h2>
          )}

          <div>
            {members.map((member, index) => (
              <div key={index}>
                {
                  <>
                    <p className='titleBold'>{member.name}</p>
                    <p>{member.designation}</p>
                    <p>{member.address}</p>
                  </>
                }
              </div>              
            ))}
          </div>



          <div>
            {students.length > 0 && (
              <h2>Students</h2>
            )}

            <div>
              {students.map((student, index) => (
                <p key={index}>{student}</p>
              ))}
            </div>
          </div>

          <div>
            {alumni.length > 0 && (
              <h2>Alumni</h2>
            )}


            <div>
              {alumni.map((alumnus, index) => (
                <p key={index}>{alumnus}</p>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

