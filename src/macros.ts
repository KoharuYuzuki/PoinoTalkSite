export async function thirdPartyLicense () {
  const text = await Bun.file('./ThirdPartyNotices.txt').text()
  return text
}
