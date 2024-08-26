import { Text, View } from "../Themed";

type Props = {
    company: {
        id: Number,
        name: String,
        cnpj: String,
        is_enabled: String
    }
}

export default function CardCompany(props: Props) {
    const company = props.company;
    return (
        <View>
            <Text>{company.name} - {company.cnpj}</Text>
        </View>
    );
}