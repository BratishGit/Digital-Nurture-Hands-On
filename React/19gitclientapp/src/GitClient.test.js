import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("Git Client Tests", () => {
    test("should return repository names for techiesyd", async () =>{

        const mockResponse={
            data:[
                {
                    name:"project1"
                },
                {
                    name:"project2"
                },
                {
                    name:"project3"
                }
            ]
        };
        axios.get.mockResolvedValue(mockResponse);

        const gitClient =new GitClient();

        const repositories=
            await gitClient.getRepositories("techiesyed")

            expect(repositories)
                .toEqual([
                    "project1",
                    "project2",
                    "project3"
                ]);
    });
});