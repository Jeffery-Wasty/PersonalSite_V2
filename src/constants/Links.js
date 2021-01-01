import React from 'react';
import { Link } from 'gatsby';
const links = [
  {
    id: 1,
    text: 'about',
    url: '/#about',
  },
  {
    id: 2,
    text: 'work',
    url: '/#work',
  },
  {
    id: 3,
    text: 'projects',
    url: '/#projects',
  },
];

export default () => {
  return (
    <ul>
      {links.map(link => {
        return (
          <li key={link.id}>
            {console.log(link.url)}
            <Link to={link.url}>{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};
