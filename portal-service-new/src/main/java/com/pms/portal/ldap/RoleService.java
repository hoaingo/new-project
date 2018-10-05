package com.pms.portal.ldap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.core.AttributesMapper;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.query.LdapQuery;
import org.springframework.ldap.query.SearchScope;
import org.springframework.ldap.support.LdapUtils;
import org.springframework.stereotype.Service;
import javax.naming.NamingException;
import javax.naming.directory.Attributes;
import java.util.List;
import static org.springframework.ldap.query.LdapQueryBuilder.query;

@Service
public class RoleService {

    private static final Integer THREE_SECONDS = 3000;

    @Autowired
    private LdapTemplate ldapTemplate;

    public List<String> getListRoleNameByUserName(String userName) {

        LdapQuery query = query()
                .searchScope(SearchScope.SUBTREE)
                .timeLimit(THREE_SECONDS)
                .countLimit(10)
                .attributes("cn")
                .base(LdapUtils.emptyLdapName())
                .where("objectclass").is("groupOfUniqueNames")
                .and("uniqueMember").is(userName)
                .and("cn").isPresent();

        return ldapTemplate.search(query, new RoleAttributesMapper());
    }

    private class RoleAttributesMapper implements AttributesMapper<String> {

        @Override
        public String mapFromAttributes(Attributes attributes) throws NamingException {
//            RoleLdap roleLdap;
            if (attributes == null) {
                return null;
            }
//            roleLdap = new RoleLdap();
//            roleLdap.setRoleName(attributes.get("cn").get().toString());
            return attributes.get("cn").get().toString();
        }
    }
}
