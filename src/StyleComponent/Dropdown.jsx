import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="bg-blue-500 text-white px-4 py-2 rounded">
        Account
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="rounded-lg bg-white p-2 shadow-lg">
        <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer rounded">
          Profile
        </DropdownMenu.Item>

        <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer rounded">
          Settings
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}