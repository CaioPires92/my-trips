import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWapper from 'components/LinkWrapper'

import * as S from './styles'

export type PageTamplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTamplateProps) => (
  <S.Content>
    <LinkWapper href="/">
      <CloseOutline size={32} />
    </LinkWapper>

    <S.Heading>{heading}</S.Heading>
    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </S.Body>
  </S.Content>
)

export default PageTemplate
