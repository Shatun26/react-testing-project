import { render } from "@testing-library/react"
import DashboardPage from "."

describe('t',()=>{
    const {getByText} = render(<DashboardPage />)
    test('1',()=>{
        const t = getByText(/DashboardPage/)
        expect(t).toBeInTheDocument()
    })
})