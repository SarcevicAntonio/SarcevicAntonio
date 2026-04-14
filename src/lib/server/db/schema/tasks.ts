import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const list = sqliteTable('list', {
	id: text('id').primaryKey().$defaultFn(crypto.randomUUID),
	label: text('label').notNull(),
})

export const task = sqliteTable('task', {
	id: text('id').primaryKey().$defaultFn(crypto.randomUUID),
	label: text('label').notNull(),
	description: text('description').notNull(),
	days: integer('days').notNull().default(7),
	done_at: text('done_at'),
	list_id: text('list_id').references(() => list.id),
})
