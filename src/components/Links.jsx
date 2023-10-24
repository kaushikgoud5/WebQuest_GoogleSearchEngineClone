import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/web', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/vedios', text: '📺 Videos' },
];

export const Links = () => (
  <div className="d-flex justify-content-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} className="text-primary text-decoration-none fs-5 m-2">{text}</NavLink>
    ))}
  </div>
);