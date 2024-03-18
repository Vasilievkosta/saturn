import { useState } from "react";
import { ArrowUp } from "@/assets/icons/arrowUp";
import { Table } from "@/components/ui/baseTable/table";
import s from "@/components/ui/baseTable/baseTable.module.scss";
import { useGetDecksQuery, useCreateDecksMutation, useDeleteDecksMutation } from "@/services/base-api";
import { TextField } from "@/components/ui/textField";
import { Button } from "@/components/ui/button";
import { Deck } from "@/services/decks.types";
import { Spinner } from "@/components/ui/spinner/spinner";

export const DecksPage = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useGetDecksQuery({ name: search });

  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDecksMutation();

  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDecksMutation();

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error</div>;
  console.log(data);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <TextField type={"search"} value={search} onChange={(e) => setSearch(e.currentTarget.value)} />

        <Button
          style={{ width: "200px" }}
          onClick={() => createDeck({ name: "new deck" })}
          disabled={isDeckBeingCreated}
        >
          Add new Deck
        </Button>
      </div>

      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>

            <Table.HeadCell className={s.headCards}>
              Cards
              <ArrowUp className={s.arrowUp} />
            </Table.HeadCell>
            <Table.HeadCell>Last Updated</Table.HeadCell>
            <Table.HeadCell>Created by</Table.HeadCell>
            <Table.HeadCell>Settings</Table.HeadCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {data?.items.map((deck: Deck) => {
            return (
              <Table.Row key={deck.id}>
                <Table.Cell>
                  {deck.name}
                  <img src={deck.cover ?? undefined} width={50} />
                </Table.Cell>
                <Table.Cell>{deck.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(deck.updated).toLocaleDateString("ru-Ru")}</Table.Cell>
                <Table.Cell>{deck.author.name}</Table.Cell>
                <Table.Cell>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteDeck(deck.id)}
                    disabled={isDeckBeingDeleted}
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </>
  );
};
