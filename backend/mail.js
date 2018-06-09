const Mail = use('Mail')

await Mail.send('emails.welcome', {}, (message) => {
    message.from('foo@bar.com')
    message.to('bar@baz.com')
})