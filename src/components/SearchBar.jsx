"use client";

import { Button, Description, FieldError, Form, Label, SearchField, Spinner } from "@heroui/react";
import React from "react";

const SearchBar = () => {
    const [value, setValue] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const MIN_LENGTH = 3;
    const isInvalid = value.length > 0 && value.length < MIN_LENGTH;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.length < MIN_LENGTH) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Search submitted:", { query: value });
            setValue("");
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="flex justify-between container mx-auto pt-5">
            <Form className="flex gap-4 items-center" onSubmit={handleSubmit}>
                <SearchField isRequired isInvalid={isInvalid} name="search" value={value} onChange={setValue}>
                    
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="" placeholder="Search products..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                    
                </SearchField>
                <Button
                    className=""
                    isDisabled={value.length < MIN_LENGTH}
                    isPending={isSubmitting}
                    type="submit"
                    variant="primary"
                >
                    {isSubmitting ? (
                        <>
                            <Spinner color="current" size="sm" />
                            Searching...
                        </>
                    ) : (
                        "Search"
                    )}
                </Button>
            </Form>
           
        </div>
    );
};

export default SearchBar;



 