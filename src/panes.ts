interface Pane {
  name: string;
  color: string;
  id: string;
}


export const panes: Pane[] = [
  { name: 'Home', color: 'primary', id: 'home' },
  { name: 'About', color: 'secondary', id: 'about' },
  { name: 'Education', color: 'success', id: 'education' },
  { name: 'Experience', color: 'danger', id: 'experience' },
  { name: 'Contact', color: 'info', id: 'contact' },
]
