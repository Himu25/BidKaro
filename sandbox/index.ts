import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	const now = new Date()
	const results =  await client.zRangeByScore("items:endingTime", now.getMilliseconds(), "+inf", {
			LIMIT: {
				offset: 0,
				count: 1
			},
		})

	console.log(results);
};
run();
