import React from 'react';
import ProjectCard from '../components/project-card';
import Map from '../components/map';
import Form from '../components/form';

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  Map: () => <Map />,
  Form: () => <Form />
};
