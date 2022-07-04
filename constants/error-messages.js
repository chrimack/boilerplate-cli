export const errorMessages = {
  invalidProjectName: `
  Project must
    1) start with a letter
    2) name may only include letters, numbers, underscores and hashes.`,

  projectAlreadyExists: (name) => `
  A project named -- ${name} -- already exists at this location`,
};
