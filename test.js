import test from 'ava'
import execa from 'execa'

test('main', async t => {
	const {stdout} = await execa.shell('node is-taken whadasd')
	t.true(stdout.indexOf('Let the hacking begin') > -1)
})
