import { $authHost } from "."

export const getNumbers = async () => {
  const { data } = await $authHost.get('api/phone-book')
  return data
}

export const postNumber = async (number) => {
  const { data } = await $authHost.post('api/phone-book', number)
  return data
}

export const removeNumber = async (number) => {
  console.log({number});
  const { data } = await $authHost.delete('api/phone-book', { data: { phoneNumber: number } })
  console.log({data});
  return data
}