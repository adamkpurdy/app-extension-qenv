/**
 * Quasar App Extension prompts script
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    name: {
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    preset: {
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return [
    {
      type: 'input',
      name: 'common_root_object',
      message: "What name would you like to use for your Common Root Object ('none' means to not use one)?",
      default: "none"
    },
    {
      type: 'confirm',
      name: 'add_qenv_to_gitignore',
      message: "For security, would you like your .quasar.env.json file automatically added to .gitignore?",
      default: true
    }
  ]
}
