import FileSaver from 'file-saver';
import { surpriseMePrompts } from './constants';

const serverUrl = `http://localhost:5000/api/v1`;

const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
};

const downloadImage = async (_id, photo) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
};

export { getRandomPrompt, serverUrl, downloadImage };
