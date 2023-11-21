import { Member, Profile, Server } from "@prisma/client"

export type ServerWithMemeberWithProfiles = Server & {
    members: (Member & {profile: Profile})[]
}