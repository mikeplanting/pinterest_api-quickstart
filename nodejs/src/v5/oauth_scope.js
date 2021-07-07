import Enum from 'enum'

export const Scope = new Enum({
  READ_BOARDS: 'boards:read',
  WRITE_BOARDS: 'boards:write',
  READ_PINS: 'pins:read',
  WRITE_PINS: 'pins:write',
  READ_USERS: 'user_accounts:read',
  READ_SECRET_BOARDS: 'boards:read_secret',
  WRITE_SECRET_BOARDS: 'boards:write_secret',
  READ_SECRET_PINS: 'pins:read_secret',
  WRITE_SECRET_PINS: 'pins:write_secret',
  READ_ADVERTISERS: 'ads:read',
});