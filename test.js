import test from 'ava'
import execa from 'execa'

test('main', async t => {
	const {stdout} = await execa.shell('node is-taken whadasd --silent')
	t.true(stdout.indexOf('Let the hacking begin') > -1)
})
