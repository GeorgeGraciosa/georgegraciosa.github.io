import Projetos from '../js/projetos.js';
import Mobile from '../js/mobile.js';

const projetos = new Projetos(
  '#slides',
  '#slide-description',
  '#email',
  '#alert'
);
projetos.init();

const mobile = new Mobile('#menu-mobile', '#nav-list');
mobile.init();
