const { pgConnect } = require("../config/pgConnect");

const updateFoods = async (
	{
		productName,
		description,
		price,
		status,
		totalSold,
		categoryIds,
		imageDtos,
	},
	productId
) => {
const client = await pgConnect().connect()

try {
  await client.query('BEGIN')
  const queryText = 'Update product set name'
  const res = await client.query(queryText, ['brianc'])

  const insertPhotoText = 'INSERT INTO photos(user_id, photo_url) VALUES ($1, $2)'
  const insertPhotoValues = [res.rows[0].id, 's3.bucket.foo']
  await client.query(insertPhotoText, insertPhotoValues)
  await client.query('COMMIT')
} catch (e) {
  await client.query('ROLLBACK')
  throw e
} finally {
  client.release()
}
};
