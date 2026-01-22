export default function errorTreatment(error) {
  if (error.code === 'ENOENT') {
    throw new Error('File not found');
  } else {
    return 'Error on the execution';
  }
}